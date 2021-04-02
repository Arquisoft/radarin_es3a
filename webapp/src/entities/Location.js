class Location {
    contructor() {
        this.latitude;
        this.longitude;
        this.name;
    }

    stringToPod() {
        return ('Coordinates: ' + this.latitude
            + ', ' + this.longitude 
            + ', ' + this.name);
    }
}
