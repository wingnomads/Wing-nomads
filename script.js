const SUPABASE_URL = "https://fdpyqsqflwqmyubugitn.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_CHWsP3y0fChbq4Pcjq5pvQ_dngXSe69";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadProfiles() {
  const container = document.getElementById("pilots-list");
  if (!container) return;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .limit(6);

  if (error) {
    container.innerHTML = "Could not load pilots.";
    console.error(error);
    return;
  }

  container.innerHTML = data.map(profile => `
    <div class="card">
      <div class="card-content">
        <h3>${profile.full_name || "Unnamed pilot"}</h3>
        <p>${profile.country || ""}</p>
        <p>${profile.flying_type || ""} · ${profile.level || ""}</p>
        <p>${profile.bio || ""}</p>
        <p>${profile.instagram || ""}</p>
      </div>
    </div>
  `).join("");
}

async function loadSpots() {
  const container = document.getElementById("spots-list");
  if (!container) return;

  const { data, error } = await supabase
    .from("spots")
    .select("*")
    .limit(6);

  if (error) {
    container.innerHTML = "Could not load spots.";
    console.error(error);
    return;
  }

  container.innerHTML = data.map(spot => `
    <div class="card">
      <div class="card-content">
        <h3>${spot.name || "Unnamed spot"}</h3>
        <p>${spot.country || ""} · ${spot.region || ""}</p>
        <p>${spot.flying_type || ""}</p>
        <p>${spot.best_season || ""}</p>
        <p>${spot.difficulty || ""}</p>
      </div>
    </div>
  `).join("");
}

loadProfiles();
loadSpots();
