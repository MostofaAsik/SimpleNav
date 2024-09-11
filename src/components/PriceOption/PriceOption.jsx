
import { PropTypes } from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { option_name, price, features } = option
    return (
        <div className="card bg-base-100 w-full md:w-96 shadow-xl">

            <div className="card-body items-center text-center">
                <h2 className="card-title text-4xl">{option_name}</h2>
                <p className='text-3xl'>Price: ${price}</p>
                <div>
                    {
                        features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                    }

                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;