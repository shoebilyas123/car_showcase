import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '~/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between items-center gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={'/logo.svg'}
            alt={'Logo'}
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Car Hub 2023 <br /> All rights reserver &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-between flex-wrap mt:10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 Car Hub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href={'/'} className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href={'/'} className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
