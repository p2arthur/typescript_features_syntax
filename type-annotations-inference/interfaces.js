var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: { isBroken: true, brokenPart: 'engine' },
    summary: function () {
        return "Car name: ".concat(this.name, ", Car year: ").concat(this.year, ", Is car broken? ").concat(this.broken.isBroken, ", Broken part: ").concat(this.isBroken.brokenPart);
    },
};
var printVehicle = function (vehicle) {
    var summary = vehicle.summary();
    console.log(summary);
};
printVehicle(oldCivic);
