function Footer() {
  return (
    <footer className="overflow-hidden rounded-b-2xl bg-black">
      <div className="container">
        <p className="text-center py-6 text-color-910 ">
          &copy; {new Date().getFullYear()} All Rights Reserved by{' '}
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="#"
            rel="noopener noreferrer"
          >
            Daiber Gonzalez
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
