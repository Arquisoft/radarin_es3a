class Location {
    contructor() {
        super();
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
