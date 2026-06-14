alert("SCRIPT ARRANCA");

const SUPABASE_URL = "https://fdpyqsqflwqmyubugitn.supabase.co";
const SUPABASE_KEY = "sb_publishable_CHWsP3y0fChbq4Pcjq5pvQ_dngXSe69";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

alert("SUPABASE CREADO");
