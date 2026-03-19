import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Building2,
  Clock,
  ArrowLeft,
  Eye,
  CircleDot,
  CheckCircle2,
  Loader2,
  Search,
  Filter,
} from 'lucide-react';

type Status = 'new' | 'in-progress' | 'completed';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  subject: string | null;
  message: string;
  status: Status;
  read: boolean;
  created_at: string;
}

interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  industry: string | null;
  services: string[];
  budget: string | null;
  timeline: string | null;
  description: string | null;
  status: Status;
  read: boolean;
  created_at: string;
}

type SortField = 'created_at' | 'name' | 'status';
type SortDir = 'asc' | 'desc';

const statusColors: Record<Status, string> = {
  new: 'bg-blue-100 text-blue-700',
  'in-progress': 'bg-amber-100 text-amber-700',
  completed: 'bg-green-100 text-green-700',
};

const statusIcons: Record<Status, React.FC<{ size?: number; className?: string }>> = {
  new: CircleDot,
  'in-progress': Clock,
  completed: CheckCircle2,
};

const formatDate = (d: string) => {
  const date = new Date(d);
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' ' + date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
};

const AdminPage: React.FC = () => {
  const [tab, setTab] = useState<'quotes' | 'messages'>('quotes');
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all');
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [quotesRes, messagesRes] = await Promise.all([
        supabase.from('quote_requests').select('*').order('created_at', { ascending: false }),
        supabase.from('contact_messages').select('*').order('created_at', { ascending: false }),
      ]);
      if (quotesRes.error) throw quotesRes.error;
      if (messagesRes.error) throw messagesRes.error;
      setQuotes(quotesRes.data || []);
      setMessages(messagesRes.data || []);
    } catch (err: any) {
      toast({ title: 'Failed to load data', description: err?.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const updateStatus = async (table: string, id: string, newStatus: Status) => {
    setUpdatingId(id);
    try {
      const { error } = await supabase.from(table).update({ status: newStatus, updated_at: new Date().toISOString() }).eq('id', id);
      if (error) throw error;
      if (table === 'quote_requests') {
        setQuotes(prev => prev.map(q => q.id === id ? { ...q, status: newStatus } : q));
      } else {
        setMessages(prev => prev.map(m => m.id === id ? { ...m, status: newStatus } : m));
      }
      toast({ title: 'Status updated' });
    } catch (err: any) {
      toast({ title: 'Update failed', description: err?.message, variant: 'destructive' });
    } finally {
      setUpdatingId(null);
    }
  };

  const toggleSort = (field: SortField) => {
    if (sortField === field) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortField(field); setSortDir('desc'); }
  };

  const SortIcon = ({ field }: { field: SortField }) => (
    sortField === field
      ? (sortDir === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />)
      : <ChevronDown size={14} className="opacity-30" />
  );

  const sortFn = (a: any, b: any) => {
    let va = a[sortField], vb = b[sortField];
    if (sortField === 'created_at') { va = new Date(va).getTime(); vb = new Date(vb).getTime(); }
    if (typeof va === 'string') { va = va.toLowerCase(); vb = vb.toLowerCase(); }
    if (va < vb) return sortDir === 'asc' ? -1 : 1;
    if (va > vb) return sortDir === 'asc' ? 1 : -1;
    return 0;
  };

  const filterFn = (item: any) => {
    if (statusFilter !== 'all' && item.status !== statusFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (item.name?.toLowerCase().includes(q) || item.email?.toLowerCase().includes(q) || item.company?.toLowerCase().includes(q));
    }
    return true;
  };

  const filteredQuotes = quotes.filter(filterFn).sort(sortFn);
  const filteredMessages = messages.filter(filterFn).sort(sortFn);

  const newQuotes = quotes.filter(q => q.status === 'new').length;
  const newMessages = messages.filter(m => m.status === 'new').length;

  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      {/* Admin Header */}
      <div className="bg-[#1a2332] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                <ArrowLeft size={16} /> Back to Site
              </Link>
              <div className="h-6 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <LayoutDashboard size={22} className="text-[#F98513]" />
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
              </div>
            </div>
            <button onClick={fetchData} disabled={loading} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} /> Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Quotes', value: quotes.length, icon: FileText, color: '#9BACD8' },
            { label: 'New Quotes', value: newQuotes, icon: CircleDot, color: '#F98513' },
            { label: 'Total Messages', value: messages.length, icon: MessageSquare, color: '#9BACD8' },
            { label: 'New Messages', value: newMessages, icon: CircleDot, color: '#F98513' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <s.icon size={20} style={{ color: s.color }} />
                <span className="text-2xl font-bold text-[#1a2332]">{s.value}</span>
              </div>
              <p className="text-gray-500 text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Tabs */}
        <div className="flex items-center gap-1 mb-6 bg-white rounded-lg p-1 shadow-sm border border-gray-100 w-fit">
          <button onClick={() => { setTab('quotes'); setExpandedRow(null); }} className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all ${tab === 'quotes' ? 'bg-[#9BACD8] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}>
            <FileText size={16} /> Quote Requests {newQuotes > 0 && <span className="ml-1 px-1.5 py-0.5 bg-[#F98513] text-white text-xs rounded-full">{newQuotes}</span>}
          </button>
          <button onClick={() => { setTab('messages'); setExpandedRow(null); }} className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all ${tab === 'messages' ? 'bg-[#9BACD8] text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}>
            <MessageSquare size={16} /> Contact Messages {newMessages > 0 && <span className="ml-1 px-1.5 py-0.5 bg-[#F98513] text-white text-xs rounded-full">{newMessages}</span>}
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search by name, email, or company..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#9BACD8]" />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gray-400" />
            {(['all', 'new', 'in-progress', 'completed'] as const).map(s => (
              <button key={s} onClick={() => setStatusFilter(s)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all capitalize ${statusFilter === s ? 'bg-[#9BACD8] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 size={32} className="animate-spin text-[#9BACD8]" />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <button onClick={() => toggleSort('name')} className="col-span-3 flex items-center gap-1 hover:text-gray-700">Name <SortIcon field="name" /></button>
              <div className="col-span-3 hidden md:block">Contact</div>
              <button onClick={() => toggleSort('status')} className="col-span-2 flex items-center gap-1 hover:text-gray-700">Status <SortIcon field="status" /></button>
              <button onClick={() => toggleSort('created_at')} className="col-span-2 flex items-center gap-1 hover:text-gray-700">Date <SortIcon field="created_at" /></button>
              <div className="col-span-2 text-right">Actions</div>
            </div>

            {/* Rows */}
            {tab === 'quotes' && filteredQuotes.length === 0 && (
              <div className="px-6 py-16 text-center text-gray-400">No quote requests found.</div>
            )}
            {tab === 'messages' && filteredMessages.length === 0 && (
              <div className="px-6 py-16 text-center text-gray-400">No contact messages found.</div>
            )}

            {tab === 'quotes' && filteredQuotes.map(q => {
              const StatusIcon = statusIcons[q.status];
              const isExpanded = expandedRow === q.id;
              return (
                <div key={q.id} className={`border-b border-gray-50 last:border-0 ${q.status === 'new' ? 'bg-blue-50/30' : ''}`}>
                  <div className="grid grid-cols-12 gap-4 px-6 py-4 items-center cursor-pointer hover:bg-gray-50/50 transition-colors" onClick={() => setExpandedRow(isExpanded ? null : q.id)}>
                    <div className="col-span-3">
                      <p className="font-semibold text-[#1a2332] text-sm">{q.name}</p>
                      <p className="text-xs text-gray-400">{q.company || 'No company'}</p>
                    </div>
                    <div className="col-span-3 hidden md:block">
                      <p className="text-sm text-gray-600 flex items-center gap-1.5"><Mail size={12} className="text-gray-400" />{q.email}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5"><Phone size={12} />{q.phone}</p>
                    </div>
                    <div className="col-span-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColors[q.status]}`}>
                        <StatusIcon size={12} />{q.status}
                      </span>
                    </div>
                    <div className="col-span-2 text-sm text-gray-500">{formatDate(q.created_at)}</div>
                    <div className="col-span-2 flex justify-end gap-1">
                      <button onClick={e => { e.stopPropagation(); setExpandedRow(isExpanded ? null : q.id); }} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <Eye size={16} className="text-gray-400" />
                      </button>
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="px-6 pb-5 pt-1 bg-gray-50/50 border-t border-gray-100">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Services Requested</h4>
                          <div className="space-y-1">{q.services.map(s => <span key={s} className="flex items-center gap-1.5 text-sm text-gray-700"><CheckCircle2 size={12} className="text-[#F98513]" />{s}</span>)}</div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Details</h4>
                          <div className="space-y-1.5 text-sm text-gray-600">
                            {q.industry && <p><span className="text-gray-400">Industry:</span> {q.industry}</p>}
                            {q.budget && <p><span className="text-gray-400">Budget:</span> {q.budget}</p>}
                            {q.timeline && <p><span className="text-gray-400">Timeline:</span> {q.timeline}</p>}
                          </div>
                          {q.description && <p className="text-sm text-gray-600 mt-3 bg-white p-3 rounded-lg border border-gray-100">{q.description}</p>}
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Update Status</h4>
                          <div className="flex flex-wrap gap-2">
                            {(['new', 'in-progress', 'completed'] as Status[]).map(s => (
                              <button key={s} onClick={() => updateStatus('quote_requests', q.id, s)} disabled={updatingId === q.id || q.status === s}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all disabled:opacity-40 ${q.status === s ? statusColors[s] : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                                {updatingId === q.id ? <Loader2 size={12} className="animate-spin" /> : s}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {tab === 'messages' && filteredMessages.map(m => {
              const StatusIcon = statusIcons[m.status];
              const isExpanded = expandedRow === m.id;
              return (
                <div key={m.id} className={`border-b border-gray-50 last:border-0 ${m.status === 'new' ? 'bg-blue-50/30' : ''}`}>
                  <div className="grid grid-cols-12 gap-4 px-6 py-4 items-center cursor-pointer hover:bg-gray-50/50 transition-colors" onClick={() => setExpandedRow(isExpanded ? null : m.id)}>
                    <div className="col-span-3">
                      <p className="font-semibold text-[#1a2332] text-sm">{m.name}</p>
                      <p className="text-xs text-gray-400">{m.subject || 'No subject'}</p>
                    </div>
                    <div className="col-span-3 hidden md:block">
                      <p className="text-sm text-gray-600 flex items-center gap-1.5"><Mail size={12} className="text-gray-400" />{m.email}</p>
                      {m.phone && <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5"><Phone size={12} />{m.phone}</p>}
                    </div>
                    <div className="col-span-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColors[m.status]}`}>
                        <StatusIcon size={12} />{m.status}
                      </span>
                    </div>
                    <div className="col-span-2 text-sm text-gray-500">{formatDate(m.created_at)}</div>
                    <div className="col-span-2 flex justify-end gap-1">
                      <button onClick={e => { e.stopPropagation(); setExpandedRow(isExpanded ? null : m.id); }} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <Eye size={16} className="text-gray-400" />
                      </button>
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="px-6 pb-5 pt-1 bg-gray-50/50 border-t border-gray-100">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Message</h4>
                          <div className="bg-white p-4 rounded-lg border border-gray-100 text-sm text-gray-700 leading-relaxed">{m.message}</div>
                          <div className="flex gap-4 mt-3 text-sm text-gray-500">
                            {m.company && <span className="flex items-center gap-1"><Building2 size={14} />{m.company}</span>}
                            <a href={`mailto:${m.email}`} className="flex items-center gap-1 text-[#9BACD8] hover:underline"><Mail size={14} />Reply</a>
                            {m.phone && <a href={`tel:${m.phone}`} className="flex items-center gap-1 text-[#9BACD8] hover:underline"><Phone size={14} />Call</a>}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">Update Status</h4>
                          <div className="flex flex-wrap gap-2">
                            {(['new', 'in-progress', 'completed'] as Status[]).map(s => (
                              <button key={s} onClick={() => updateStatus('contact_messages', m.id, s)} disabled={updatingId === m.id || m.status === s}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all disabled:opacity-40 ${m.status === s ? statusColors[s] : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                                {updatingId === m.id ? <Loader2 size={12} className="animate-spin" /> : s}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
