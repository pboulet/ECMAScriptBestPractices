// create an instance of a Happiness object , which is not inheriting from any object
var HappinessObject = Object.create(null, {
    basicHappiness: 5
});

// no other properties can be added to the object is true
Object.isExtensible(HappinessObject);

// prevents extensions for this object
Object.preventExtensions(HappinessObject);

// turns off the configurable bit property of the object
Object.seal(HappinessObject);

// turn off the configurable bit && writable bit of the object
Object.freeze(HappinessObject);