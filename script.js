const map = L.map('map', {
    center: [20, 0],
    zoom: 3,
    maxZoom: 6,
    minZoom: 2,
    maxBounds: L.latLngBounds([85, -180], [-85, 180])
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


const markerData = [
    { coordinates: [30, 31], sport: 'Archery', origin: 'Egypt' },
    { coordinates: [20, 76], sport: 'Badminton', origin: 'British India' },
    { coordinates: [45, -120], sport: 'Baseball', origin: 'United States' },
    { coordinates: [40, -100], sport: 'Basketball', origin: 'United States' },
    { coordinates: [47, 9], sport: 'Bobsleigh', origin: 'Switzerland' },
    { coordinates: [55, -2], sport: 'Bowling', origin: 'England' },
    { coordinates: [38, 22], sport: 'Boxing', origin: 'Ancient Greece' },
    { coordinates: [53, -3], sport: 'Canoeing', origin: 'England' },
    { coordinates: [25, 78], sport: 'Chess', origin: 'India' },
    { coordinates: [47, 0], sport: 'Checkers', origin: 'France' },
    { coordinates: [52, 0], sport: 'Cricket', origin: 'England' },
    { coordinates: [45, 5], sport: 'Cycling', origin: 'France' },
    { coordinates: [25, 27], sport: 'Fencing', origin: 'Egypt' },
    { coordinates: [24, 33], sport: 'Football', origin: 'Egypt' },
    { coordinates: [31, -85], sport: 'Formula Racing', origin: 'United States' },
    { coordinates: [35, -110], sport: 'Frisbee', origin: 'United States' },
    { coordinates: [57, -5], sport: 'Golf', origin: 'Scotland' },
    { coordinates: [40, 24], sport: 'Gymnastics', origin: 'Ancient Greece' },
    { coordinates: [31, 26], sport: 'Handball', origin: 'Egypt' },
    { coordinates: [55, -120], sport: 'Hockey', origin: 'Canada' },
    { coordinates: [45, 88], sport: 'Horse Racing', origin: 'Central Asia' },
    { coordinates: [52, -110], sport: 'Ice Hockey', origin: 'Canada' },
    { coordinates: [40, 140], sport: 'Jujutsu', origin: 'Japan' },
    { coordinates: [26, 128], sport: 'Karate', origin: 'Okinawa, Japan' },
    { coordinates: [36, 139], sport: 'Kickboxing', origin: 'Japan' },
    { coordinates: [51, -3], sport: 'Motocross', origin: 'United Kingdom' },
    { coordinates: [44, -90], sport: 'Pool', origin: 'United States' },
    { coordinates: [47, 15], sport: 'Rock Climbing', origin: 'Central Europe' },
    { coordinates: [47, 84], sport: 'Rugby', origin: 'Central Asia' },
    { coordinates: [60, 9], sport: 'Ski Jumping', origin: 'Norway' },
    { coordinates: [60, 16], sport: 'Skiing', origin: 'Scandinavia' },
    { coordinates: [40, -100], sport: 'Skating', origin: 'United States' },
    { coordinates: [54, -1], sport: 'Snooker', origin: 'British Empire' },
    { coordinates: [42, -110], sport: 'Snowboarding', origin: 'United States' },
    { coordinates: [-20, 170], sport: 'Surfing', origin: 'Polynesia' },
    { coordinates: [23, 29], sport: 'Swimming', origin: 'Ancient Egypt' },
    { coordinates: [15, 78], sport: 'Table Tennis', origin: 'British India' },
    { coordinates: [36, 128], sport: 'Taekwondo', origin: 'Korea' },
    { coordinates: [20, 83], sport: 'Tennis', origin: 'British India' },
    { coordinates: [38, -117], sport: 'Ultimate Frisbee', origin: 'United States' },
    { coordinates: [32, -100], sport: 'Volleyball', origin: 'United States' },
    { coordinates: [56, -3], sport: 'Water Polo', origin: 'Scotland' },
    { coordinates: [40, 22], sport: 'Wrestling', origin: 'Ancient Greece' },
    { coordinates: [35, 137], sport: 'Kickboxing', origin: 'Japan' },
    { coordinates: [37, -90], sport: 'Kart Racing', origin: 'United States' }
];

markerData.forEach(markerInfo => {
    const { coordinates, sport, origin } = markerInfo;
    const marker = L.marker(coordinates)
        .addTo(map);

    marker.on('mouseover', function () {
        marker.bindTooltip(`<b>Sport: ${sport}</b><br>Originally from: ${origin}`).openTooltip();
    });

    marker.on('mouseout', function () {
        marker.closeTooltip();
    });
});