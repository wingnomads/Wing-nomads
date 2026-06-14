alert("SCRIPT ARRANCA");

const SUPABASE_URL = "https://fdpyqsqflwqmyubugitn.supabase.co";
const SUPABASE_KEY = "TU_PUBLISHABLE_KEY_REAL";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

alert("SUPABASE CREADO");
