var HappinessObject = {
    basicHappiness: 5
};
Object.defineProperty(HappinessObject, 'moreHappiness',
    {
        get: function() {
            return this.happiness * 10;
        },
        set: function(value){
            this.happiness = value / 10;
        },
        enumerable: true
    }
);
