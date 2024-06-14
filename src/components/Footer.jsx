import * as React from "react";

const ContactDetails = ({ name, address, phone, altImg }) => (
  <div className="flex flex-col">
    <h2 className="mb-8 text-base">
      {name}
    </h2>
    <address className="mb-2.5 text-sm">
      {address}
    </address>
    <div className="flex flex-row justify-center text-sm font-bold leading-7">
      <img 
        loading="lazy" 
        src={altImg} 
        alt={name} 
        className="w-2.5 aspect-square" 
      />
      <span>
        {phone}
      </span>
    </div>
  </div>
);

const SocialIcon = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-[0.97] fill-black h-[30px] w-[30px]" />
);

const OpeningHours = ({ day, hours }) => (
  <div className="flex gap-5 justify-between mt-2">
    <span>{day}</span>
    <span>{hours}</span>
  </div>
);

const ServicesMenuItem = ({item}) => (
  <li>
    <a href={item.link} title={item.text}>
      {item.text}
    </a>
  </li>
);

const ServicesMenu = ({ menuItems }) => (
  <nav>
    <ul className="box-border flex relative flex-col shrink-0 gap-4">
      {menuItems.map((item, index) => {
        return <ServicesMenuItem key={index} item={item} />;
      })}
    </ul>
  </nav>
);

function Footer() {
  const contacts = [
    { 
      name: "BEAUTY ONE", 
      address: "OneEntry street, 10", 
      phone: "+7 800 784 00 98", 
      altImg: "./icons/phone-2.svg"
    },
    { 
      name: "BEAUTY TWO", 
      address: "Happy avenue, 108", 
      phone: "+7 800 784 00 98", 
      altImg: "./icons/phone-2.svg" 
    },
    { 
      name: "BEAUTY THREE", 
      address: "Oak alley, 55", 
      phone: "+7 800 784 00 98", 
      altImg: "./icons/phone-2.svg"
    }
  ];

  const socialIcons = [
    { 
      src: "./icons/instagram.svg", 
      alt: "Social icon 1" 
    },
    { 
      src: "./icons/facebook.svg", 
      alt: "Social icon 2" 
    },
    { 
      src: "./icons/twitter.svg", 
      alt: "Social icon 3" 
    }
  ];

  const openingHours = [
    { 
      day: "Monday", 
      hours: "08.00-22.00" 
    },
    { 
      day: "Tuesday", 
      hours: "08.00-22.00" 
    },
    { 
      day: "Wednesday", 
      hours: "08.00-22.00" 
    },
    { 
      day: "Thursday", 
      hours: "08.00-22.00" 
    },
    { 
      day: "Friday", 
      hours: "08.00-22.00" 
    },
    { 
      day: "Saturday", 
      hours: "12.00-22.00" 
    },
    { 
      day: "Sunday", 
      hours: "12.00-22.00" 
    }
  ];

  const servicesMenuItems = [
    {
      link: '#',
      text: 'Hair Cut'
    },
    {
      link: '#',
      text: 'Manicure'
    },
    {
      link: '#',
      text: 'Pedicure'
    },
    {
      link: '#',
      text: 'Haircolor'
    },
    {
      link: '#',
      text: 'Styling'
    },
  ];

  const aboutMenuItems = [
    {
      link: '#',
      text: 'Our Specialist'
    },
    {
      link: '#',
      text: 'Prices'
    },
    {
      link: '#',
      text: 'Reviews'
    },
  ];

  return (
    <footer className="flex justify-center items-center px-16 py-16 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 items-start w-full max-w-[1392px] max-md:flex-wrap max-md:max-w-full">

        <div className="box-border flex relative flex-col shrink-0 mr-36 w-6/12 max-sm:w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">

            <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col gap-6 max-md:max-w-full max-sm:mb-10">
                <div className="text-lg font-bold text-black max-md:max-w-full">
                  Contacts:
                </div>

                <div className="flex gap-5 justify-between text-black max-md:flex-wrap">
                  {contacts.map((contact, index) => (
                    <ContactDetails
                      key={index}
                      name={contact.name}
                      address={contact.address}
                      phone={contact.phone}
                      altImg={contact.altImg}
                    />
                  ))}
                </div>

                <div className="flex flex-col mt-6 max-w-full w-[134px]">
                  <h2 className="mb-5 text-sm font-bold text-black">
                    Follow us:
                  </h2>
                  <div className="flex gap-5 justify-around items-end mb-5">
                    {socialIcons.map((icon, index) => (
                      <SocialIcon key={index} src={icon.src} alt={icon.alt} />
                    ))}
                  </div>
                </div>

                <div className="text-base font-medium text-left text-black max-md:max-w-full">
                  <span className="leading-5">@ 2024 OneEntry, by</span>
                  <a href="https://oneentry.cloud" className="leading-5 text-black">oneentry.cloud</a>
                </div>

              </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col gap-6 self-center w-auto max-sm:mr-auto">
                <h2 className="text-lg font-bold leading-8">
                  Services
                </h2>
                <ServicesMenu menuItems={servicesMenuItems} />
              </div>
            </div>

          </div>
        </div>

        <div className="flex-auto w-2/5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <aside className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <article className="flex flex-col self-start">
                <h2 className="mb-6 text-lg font-bold leading-8">About us</h2>
                <div className="flex flex-col justify-center text-base">
                  {/* <ul className="flex flex-col gap-4">
                    <li>Our Specialist</li>
                    <li>Prices</li>
                    <li>Reviews</li>
                  </ul> */}
                  <ServicesMenu menuItems={aboutMenuItems} />
                </div>
              </article>
            </aside>
            <aside className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <article className="flex flex-col grow p-5 text-black border border-black border-solid max-md:mt-10">
                <h2 className="text-lg font-bold">Opening Time</h2>
                <div className="flex flex-col mt-4 text-base whitespace-nowrap">
                  {openingHours.map((hours, index) => (
                    <OpeningHours key={index} day={hours.day} hours={hours.hours} />
                  ))}
                </div>
              </article>
            </aside>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
