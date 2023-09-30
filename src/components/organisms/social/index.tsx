import { FaGithub, FaLinkedinIn, FaMailBulk, FaWhatsapp } from 'react-icons/fa';

function Social() {
  const socialContent = [
    {
      id: 1,
      link: 'https://github.com/daibergm',
      icon: <FaGithub />,
      iconClass: 'text-[#02050B]',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/daibergm/',
      icon: <FaLinkedinIn />,
      iconClass: 'text-[#0072b1]',
    },
    {
      id: 3,
      link: 'mailto:daibergonzalez94@gmail.com',
      icon: <FaMailBulk />,
      iconClass: 'text-[#BF211E]',
    },
    {
      id: 4,
      link: 'https://api.whatsapp.com/send?phone=573123732129',
      icon: <FaWhatsapp />,
      iconClass: 'text-[#4EC75A]',
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.id}>
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
}

export default Social;
