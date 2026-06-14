const SUPABASE_URL = "https://fdpyqsqflwqmyubugitn.supabase.co";
const SUPABASE_KEY = "sb_publishable_CHWsP3y0fChbq4Pcjq5pvQ_dngXSe69";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadProfiles() {
  const container = document.getElementById("profiles-container");
  if (!container) return;

  const { data, error } = await supabase.from("profiles").select("*").limit(6);

  if (error) {
    console.error(error);
    container.innerHTML = "Could not load pilots";
    return;
  }

  container.innerHTML = data.map(profile => `
    <div class="card">
      <h3>${profile.full_name || "Unnamed Pilot"}</h3>
      <p>${profile.country || ""}</p>
      <p>${profile.flying_type || ""}</p>
      <p>${profile.level || ""}</p>
    </div>
  `).join("");
}

async function loadSpots() {
  const container = document.getElementById("spots-container");
  if (!container) return;

  const { data, error } = await supabase.from("spots").select("*").limit(6);

  if (error) {
    console.error(error);
    container.innerHTML = "Could not load spots";
    return;
  }

  container.innerHTML = data.map(spot => `
    <div class="card">
      <h3>${spot.name || "Unnamed Spot"}</h3>
      <p>${spot.country || ""}</p>
      <p>${spot.region || ""}</p>
      <p>${spot.difficulty || ""}</p>
    </div>
  `).join("");
}

loadProfiles();
loadSpots();
alert("SCRIPT CARGADO");
