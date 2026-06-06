const facilitators = [
    {
        name: "Rehan Ahmed",
        title: "Founder & AI Mentor",
        bio: "Expert in AI, Digital Transformation & Online Education"
    },
    {
        name: "Aisha Khan",
        title: "Digital Skills Lead",
        bio: "Specialist in Content Creation and Online Teaching"
    },
    {
        name: "Usman Farooq",
        title: "Financial Literacy Coach",
        bio: "Helping students achieve financial independence"
    }
];

function navigateTo(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById(section + '-section').classList.remove('hidden');
    
    if (section === 'facilitators') renderFacilitators();
}

function renderFacilitators() {
    const container = document.getElementById('facilitators-list');
    container.innerHTML = facilitators.map(f => `
        <div class="bg-white rounded-3xl p-8 shadow text-center">
            <div class="w-24 h-24 bg-emerald-100 mx-auto rounded-2xl mb-6 flex items-center justify-center text-4xl">👨‍🏫</div>
            <h3 class="font-bold text-2xl">${f.name}</h3>
            <p class="text-emerald-600 font-medium">${f.title}</p>
            <p class="text-gray-600 mt-4">${f.bio}</p>
        </div>
    `).join('');
}

function showEnrollModal() {
    document.getElementById('enroll-modal').classList.remove('hidden');
    document.getElementById('enroll-modal').classList.add('flex');
}

function closeEnrollModal() {
    const modal = document.getElementById('enroll-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function enrollNow() {
    closeEnrollModal();
    setTimeout(() => alert("🎉 Welcome to Rehan Education! Your enrollment is confirmed."), 600);
}

function submitContact(e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been received. We'll contact you soon.");
    e.target.reset();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
});