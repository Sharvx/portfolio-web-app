function Footer(){
    
    const currentYear = new Date().getFullYear();

    return(<>
    <div className="h-[10dvh] mt-[16dvh] min-h-fit flex-row-center small-text text-choco font-bold bg-sheer">
        @{currentYear} Sharvx. All Rights Reserved.
    </div>
    </>);
}

export default Footer;