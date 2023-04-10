car = {
    manufacturer: {
        toyota: [
            {
                vitz: {
                    color: 'Blue',
                    bodyType: 'Hatchback'
                },
                corolla: {
                    color: 'Silver',
                    bodyType: 'Sedan'
                }
            }
        ],
        Honda: [
            {
                civic: {
                    color: 'White',
                    bodyType: 'Hatchback'
                },
                city: {
                    color: 'Black',
                    bodyType: 'Sedan'
                }
            }
        ],
        Maruthi: [
            {
                Brezza: {
                    color: 'White',
                    bodyType: 'SUV'
                },
                Ciaz: {
                    color: 'Black',
                    bodyType: 'Sedan'
                }
            }
        ]
    }
}; 
const restFunction=(x)=>{
    const {manufacturer}=x;
    const {Honda,Maruthi,...rest}=manufacturer;
    const [first]=Honda;
    const {city}=first;
    console.log(city);
    const [second]=Maruthi;
    const {Ciaz}=second;
    console.log(Ciaz);
}
restFunction(car);