import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rskanhylpcrentsnclfc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJza2FuaHlscGNyZW50c25jbGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5MTUwMjEsImV4cCI6MjAwNDQ5MTAyMX0.RQIrE_KW2c2qyvpUe84hP4m-q02Agfcz-Xd2DwIP0EI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
