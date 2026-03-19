import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://qzputvaxxspesyfuwrvx.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjA1YzlhMzgwLTA2ZjAtNGFkZS05NTQxLWI4MGZkMTc0ZGYzMSJ9.eyJwcm9qZWN0SWQiOiJxenB1dHZheHhzcGVzeWZ1d3J2eCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzczODUyOTAxLCJleHAiOjIwODkyMTI5MDEsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.eMK-ns979p5QAW5UU_AGfdVdiu5J4lDjHCuRgJWkK2U';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };