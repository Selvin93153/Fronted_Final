import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
    setIsMenuToggled,
}) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "");

    const clickMenuMobile = () => {
        setSelectedPage(lowerCasePage);
        if (setIsMenuToggled) {
            setIsMenuToggled(false);
        }
    }

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={clickMenuMobile}
        >
            {page}
        </AnchorLink>
    );
}

export default Link;
