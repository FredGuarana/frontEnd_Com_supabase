import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase
const supabaseUrl = 'https://vcumzifsuyjzpjfnrepm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjdW16aWZzdXlqenBqZm5yZXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyMjYyMzUsImV4cCI6MjAwNzgwMjIzNX0.3TFumswwt2cmo1JcY5pPrqYX42JitYunnnpMllVdxVE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
