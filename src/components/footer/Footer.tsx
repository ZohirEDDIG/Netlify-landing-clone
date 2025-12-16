import { Links, Newsletter, Bottom } from './subcomponents';

const Footer = () => {
    return (
        <footer>

            <div className='ctn flex flex-col gap-y-20'>

                <Links />

                <Newsletter />

                <Bottom />
                
            </div>

        </footer>
    );
};

export default Footer;