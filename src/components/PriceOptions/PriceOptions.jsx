import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {


    //data start

    const price_options = [
        {
            "id": "001",
            "option_name": "Basic Monthly Plan",
            "price": 30,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 guest pass per month"
            ]
        },
        {
            "id": "002",
            "option_name": "Standard Monthly Plan",
            "price": 50,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "5 guest passes per month",
                "Access to group fitness classes"
            ]
        },
        {
            "id": "003",
            "option_name": "Premium Monthly Plan",
            "price": 70,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited guest passes",
                "Access to group fitness classes",
                "1 personal training session per month"
            ]
        }
    ]



    //data end
    return (
        <div>
            <h2 className="text-center text-xl md:text-4xl"> Best Gym Price option in Our Country </h2>
            <div className="md:flex md:justify-between gap-28 mt-5">
                {
                    price_options.map(option => <PriceOption key={option.id} option={option} />)
                }
            </div>
        </div>
    );
};

export default PriceOptions;