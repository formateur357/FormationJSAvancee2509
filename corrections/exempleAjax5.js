let api_key = "AIzaSyCcjz5z-8M_Pnu_pZwARCcwW1tX_XD2vSM"

/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcjz5z-8M_Pnu_pZwARCcwW1tX_XD2vSM&callback=initMap" async defer></script> */

let map;

function initMap() {
    //Creez une carte Gogle Maps en utilisant la cle API
    map = new google.maps.MAP(document.getElementById("map"), {
        center: {lat: 37.7749, lng: -122.4194}, //coordonnees de San Francisco
        zoom: 8
    })
    // Créez une demande de géocodage inversé pour obtenir des informations sur un lieu
    const geocoder = new google.maps.Geocoder();
    const request = {
        location: { lat: 37.7749, lng: -122.4194 }, // Coordonnées de San Francisco
    };

    geocoder.geocode(request, (results, status) => {
        if (status === "OK") {
            // Affichez les informations du lieu dans la console
            console.log("Informations du lieu :", results[0]);
        } else {
            console.error("Erreur de géocodage :", status);
        }
    });
}