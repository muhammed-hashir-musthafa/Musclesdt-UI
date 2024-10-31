import { useState } from 'react';
import logo from "../assets/BioAlpine Logo png.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { Link, Outlet } from 'react-router-dom';

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
];



export default function HomePage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="bg-white">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only"> Company Logo</span>
                            <img
                                className="h-7 w-auto"
                                src={logo}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-normal text-gray-900">
                                Product
                                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </PopoverButton>
                            <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <Link to={item.href} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>
                        {['Dashboard', 'Team', 'Features', 'Marketplace', 'Company'].map((link) => (
                            <Link
                                key={link}
                                to="/"
                                className="relative text-sm font-normal text-gray-900 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-black 600 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                            >
                                {link}
                            </Link>
                        ))}
                    </PopoverGroup>
                    <button className="flex items-center ms-10 ">
                        <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 text-gray-500" />
                    </button>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Menu as="div" className="relative me-2">
                            <div>
                                <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="h-8 w-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <MenuItem>
                                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Your Profile
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Settings
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Sign out
                                    </Link>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                        <Link to="/" className="text-sm font-semibold text-gray-900 flex items-center">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>

                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src={logo}
                                    alt=""
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-normal text-gray-900 hover:bg-gray-50">
                                            Product
                                            <ChevronDownIcon className="h-5 w-5 text-gray-400 group-data-[open]:rotate-180" aria-hidden="true" />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">
                                            {[...products, ...callsToAction].map((item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    to={item.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            ))}
                                        </DisclosurePanel>
                                    </Disclosure>
                                    <nav className="mt-6 flow-root">
                                        <div className="-my-6 divide-y divide-gray-500">
                                            <div className="space-y-2 py-6">
                                                <Link to="/" className="-mx-3 block rounded-lg py-2.5 text-base font-normal text-gray-900 hover:bg-gray-200">
                                                    Dashboard
                                                </Link>
                                                {['Team', 'Features', 'Marketplace', 'Company'].map((item) => (
                                                    <Link
                                                        key={item}
                                                        to="/"
                                                        className="-mx-3 block rounded-lg py-2.5 text-base font-normal text-gray-900 hover:bg-gray-200"
                                                    >
                                                        {item}
                                                    </Link>
                                                ))}
                                                <Link to="/" className="-mx-3 block rounded-lg py-2.5 text-base font-normal text-gray-900 hover:bg-gray-200">
                                                    Login
                                                </Link>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="bg-gray-900 text-white py-8 font-sans px-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-lg font-bold mb-4">Our Locations</h2>
                        <ul className="text-gray-400">
                            <li className="mb-2">The Squaire - Am Flughafen 715, The Squaire 12, Am Flughafen, Frankfurt, Hessen 60549, DE</li>
                            <li>Hanau, 63450, DE</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-4">Top Categories</h2>
                        <ul className="text-gray-400">
                            <li className="mb-2">Televisions</li>
                            <li className="mb-2">Washing Machines</li>
                            <li className="mb-2">Air Conditioners</li>
                            <li className="mb-2">Laptops</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-4">Important Links</h2>
                        <ul className="text-gray-400">
                            <li className="mb-2">About Us</li>
                            <li className="mb-2">Contact Us</li>
                            <li className="mb-2">FAQ</li>
                            <li className="mb-2">Latest Posts</li>
                            <li>Order Track</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-4">Newsletter</h2>
                        <p className="text-gray-400">Enter your email to receive our latest updates about our products.</p>
                        <div className="mt-4 flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="p-2 rounded-l bg-gray-800 text-white placeholder-gray-500 outline-none focus:bg-gray-700"
                            />
                            <button className="p-2 rounded-r bg-orange-600 text-white hover:bg-orange-500 transition duration-300">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500">© 2024 Musclestadt. All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <img src="https://i.pinimg.com/736x/45/34/d8/4534d8c4e3a5c213b030e0ff0e0dd610.jpg" alt="PayPal" className="h-6" />
                        <img src="https://w7.pngwing.com/pngs/385/197/png-transparent-visa-flat-brand-logo-icon.png" alt="VISA" className="h-6" />
                        <img src="https://w7.pngwing.com/pngs/397/885/png-transparent-logo-mastercard-product-font-mastercard-text-orange-logo-thumbnail.png" alt="MasterCard" className="h-6" />
                        <img src="https://w7.pngwing.com/pngs/711/297/png-transparent-logo-american-express-payment-computer-icons-brand-american-express-blue-text-rectangle.png" alt="American Express" className="h-6" />
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a target='_blank' href="https://www.facebook.com/Musclestadt/" className="text-gray-500 hover:text-white transition duration-300"><i className="fab fa-facebook-f"></i></a>
                        <a target='_blank' href="https://www.instagram.com/musclestadt/" className="text-gray-500 hover:text-white transition duration-300"><i className="fab fa-instagram"></i></a>
                        <a target='_blank' href="https://www.linkedin.com/company/musclestadt" className="text-gray-500 hover:text-white transition duration-300"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </footer>
        </>
    );
}