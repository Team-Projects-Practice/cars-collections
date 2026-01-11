const CloseIcon = ({ color = "currentcolor" }) => {
    return (
        <svg
            className="icons closeIcon"
            alt="closeIcon"
            stroke={color} fill={color} strokeWidth="0"
            viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
        </svg>
    )
}
const CloseIconX = ({ color = "currentcolor" }) => {
    return (
        <svg className="icons closeIconX" alt="closeIconX" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
            <g fill="#fff" stroke="#ccc" strokeWidth="1">
                <circle cx="17" cy="17" r="17" stroke="none" />
                <circle cx="17" cy="17" r="16.5" fill="none" />
            </g>
            <line x2="13" y2="13" transform="translate(10.5 10.5)" fill="none" stroke={color} strokeWidth="3" />
            <line y1="13" x2="13" transform="translate(10.5 10.5)" fill="none" stroke={color} strokeWidth="3" />
        </svg>
    )
}

const FilterIcon = ({ color = "currentcolor" }) => {
    return (
        <svg className="icons FilterIcon" focusable="false" viewBox="0 0 24 24" width="1em" height="1em" fill={color}>
            <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
        </svg>
    )
}

const XIcon = ({ color = "currentcolor", ...props }) => {
    return (
        <svg className="icons XIcon" alt="XIcon" xmlns="http://www.w3.org/2000/svg" width="12.121" height="12.121" viewBox="0 0 12.121 12.121" {...props}>
            <g transform="translate(-1170.139 -34.139)">
                <line x2="10" y2="10" transform="translate(1171.2 35.2)" fill="none" stroke={color} strokeWidth="3" />
                <line y1="10" x2="10" transform="translate(1171.2 35.2)" fill="none" stroke={color} strokeWidth="3" />
            </g>
        </svg>
    )
}
const CloseIcon1 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12.121" height="12.121" viewBox="0 0 12.121 12.121">
            <g id="Group_454" data-name="Group 454" transform="translate(-1170.139 -34.139)">
                <line id="Line_23" data-name="Line 23" x2="10" y2="10" transform="translate(1171.2 35.2)" fill="none" stroke="#222" strokeWidth="3" />
                <line id="Line_24" data-name="Line 24" y1="10" x2="10" transform="translate(1171.2 35.2)" fill="none" stroke="#222" strokeWidth="3" />
            </g>
        </svg>
    )
}
const CloseIcon2 = () => {
    return (
        <svg className="icons closeIcon2" alt="closeIcon2" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
            <g fill="#fff" stroke="#ccc" strokeWidth="1">
                <circle cx="17" cy="17" r="17" stroke="none" />
                <circle cx="17" cy="17" r="16.5" fill="none" />
            </g>
            <line x2="13" y2="13" transform="translate(10.5 10.5)" fill="none" stroke="#222" strokeWidth="3" />
            <line y1="13" x2="13" transform="translate(10.5 10.5)" fill="none" stroke="#222" strokeWidth="3" />
        </svg>
    )
}
const SearchIcon = ({ color = "currentcolor" }) => {
    return (
        <svg className="icons searchIcon" alt="searchIcon" width="1em" height="1em" viewBox="0 0 22.201 22.201" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(1 1)">
                <ellipse cx="8" cy="7.5" rx="8" ry="7.5" transform="translate(0 0)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <line x1="5.923" y1="5.923" transform="translate(13.864 13.346)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
        </svg>
    )
}
const TelephoneIcon = ({ color = "currentcolor" }) => {
    return (
        <svg className="icons telephoneIcon" alt="telephoneIcon" width="1em" height="1em" viewBox="0 0 25.25 25.25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.207,1m8.109,18.574v3.5a2.333,2.333,0,0,1-2.324,2.343c-.073,0-.146,0-.219-.009A23.087,23.087,0,0,1,12.7,21.826a22.746,22.746,0,0,1-7-7A23.087,23.087,0,0,1,2.121,4.71,2.334,2.334,0,0,1,4.235,2.176c.069-.006.139-.009.208-.009h3.5a2.333,2.333,0,0,1,2.333,2.007,14.972,14.972,0,0,0,.817,3.278,2.333,2.333,0,0,1-.525,2.462L9.087,11.4a18.667,18.667,0,0,0,7,7l1.482-1.482a2.333,2.333,0,0,1,2.462-.525,14.972,14.972,0,0,0,3.278.817A2.333,2.333,0,0,1,25.315,19.574Z" transform="translate(-1.102 -1.166)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
    )
}
const UserIcon = ({ color = "currentcolor" }) => {
    return (
        <svg className="icons userIcon" alt="userIcon" width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.333,23.908A2.948,2.948,0,0,1,22.036,25H2.963a2.967,2.967,0,0,1-2.9-3.578,12.7,12.7,0,0,1,8.464-9.463,6.641,6.641,0,1,1,7.949,0,12.7,12.7,0,0,1,6.582,5,.977.977,0,1,1-1.622,1.088,10.743,10.743,0,0,0-8.676-4.769q-.129,0-.26.005t-.259,0A10.79,10.79,0,0,0,1.975,21.82a1.02,1.02,0,0,0,.207.855.992.992,0,0,0,.781.371H22.036a.992.992,0,0,0,.781-.371,1.02,1.02,0,0,0,.207-.855.977.977,0,0,1,1.912-.4,2.965,2.965,0,0,1-.6,2.486ZM12.264,11.322l.236,0,.237,0a4.687,4.687,0,1,0-.474,0Z" transform="translate(0 0)" fill={color} />
        </svg>
    )
}
const WishOutlineIcon = ({ color = "currentcolor" }) => {
    return (
        <svg className="icons WishOutlineIcon" alt="WishOutlineIcon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" aria-label="fontSize large"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" fill={color}></path></svg>
    )
}
const WishFullIcon = ({ color = "#CC1414" }) => {
    return (
        <svg className="icons WishFullIcon" alt="WishFullIcon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteIcon" fill={color}><path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
    )
}
const WishIcon = ({ color = "currentcolor" }) => {
    return (
        <svg className="icons wishIcon" alt="wishIcon" width="1em" height="1em" viewBox="0 0 27.408 24.365" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.8,13.006a30.645,30.645,0,0,1-2.474,2.671c-.724.73-1.458,1.454-1.983,1.969l0,0c-.971.979-1.961,1.948-2.439,2.415a.967.967,0,0,1-.678.277h0a.964.964,0,0,1-.709-.309,1.015,1.015,0,0,1,.031-1.414c.659-.642,1.3-1.273,1.879-1.854a.992.992,0,0,1,.1-.117c.869-.847,1.7-1.674,2.418-2.4,1.206-1.217,2.076-2.133,2.212-2.345a6.871,6.871,0,0,0,1.27-4.337A5.8,5.8,0,0,0,19.859,2c-2.9,0-5.328,3.461-5.352,3.5a.976.976,0,0,1-.8.425h-.014a.976.976,0,0,1-.8-.447C12.865,5.44,10.556,2,7.548,2A5.8,5.8,0,0,0,1.973,7.57a6.948,6.948,0,0,0,1.27,4.337c1.457,2.254,8.71,8.615,10.5,10.174l.1-.079.834-.652a.968.968,0,0,1,1.375.185,1.014,1.014,0,0,1-.181,1.4l-.736.575-.828.647a.967.967,0,0,1-1.228-.028c-.392-.336-9.63-8.26-11.481-11.124A8.853,8.853,0,0,1,.013,7.463,8.034,8.034,0,0,1,2.338,2.208,7.324,7.324,0,0,1,7.548,0c2.832,0,5.025,2,6.172,3.326C14.9,2,17.136,0,19.859,0A7.324,7.324,0,0,1,25.07,2.208a8.033,8.033,0,0,1,2.324,5.255,8.938,8.938,0,0,1-1.59,5.543Z" transform="translate(0 0)" fill={color} />
        </svg>
    )
}
const CartIcon = ({ color = "currentcolor" }) => {
    return (
        <svg className="icons cartIcon" alt="cartIcon" width="1em" height="1em" viewBox="0 0 26.038 26.038" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(1 1)">
                <path d="M36.192,43.231H22.466L19.113,24.793A.962.962,0,0,0,18.175,24H16" transform="translate(-16 -24)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <circle cx="2.341" cy="2.341" r="2.341" transform="translate(5.307 19.355)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <circle cx="2.341" cy="2.341" r="2.341" transform="translate(17.482 19.355)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M49.743,73.615h15.1a1.911,1.911,0,0,0,1.887-1.575L68.192,64H48" transform="translate(-44.154 -59.192)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
        </svg>
    )
}
const MenuIcon = ({ color = "currentcolor" }) => {
    return (
        <svg className="icons menuIcon" alt="menu toggle" width="1em" height="1em" viewBox="0 0 22.625 17" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-513.5 -34.5)">
                <line x2="20.625" transform="translate(514.5 35.5)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="2" />
                <line x2="20.625" transform="translate(514.5 43)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="2" />
                <line x2="20.625" transform="translate(514.5 50.5)" fill="none" stroke={color} strokeLinecap="round" strokeWidth="2" />
            </g>
        </svg>
    )
}

const ImagePlaceholderIcon = ({ color = "currentcolor", ...props }) => {
    return (
        <svg className="icons imagePlaceholderIcon" alt="imagePlaceholderIcon" width="1em" height="1em" fill={color} viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
        </svg>
    )
}
const TickIcon = ({ color = "currentcolor" }) => {
    return (
        <svg className="icons tickIcon" alt="tickIcon" width="1em" height="1em" fill="none" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
            <path id="download" d="M-.3,6.512,5.118,12.25,12.413,1" transform="translate(1.391 -0.184)" fill="none" stroke={color} strokeWidth="3" />
        </svg>
    )
}
const TickIconNew = () => {
    return (
        <svg width="18.526" height="15" viewBox="0 0 18.526 15">
            <path d="M15.742,49,6.307,58.439,2.781,54.912,0,57.7,6.3,64l.815-.811h0L18.526,51.781Z" transform="translate(0 -49)" fill="#43a700" />
        </svg>
    )
}

const Telephone = ({ color = "currentcolor" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="36.811" height="36.878" viewBox="0 0 36.811 36.878">
            <path d="M23.348,7.564a8.206,8.206,0,0,1,6.483,6.483M23.348,1A14.772,14.772,0,0,1,36.4,14.032m-1.641,13.1v4.924a3.283,3.283,0,0,1-3.578,3.283A32.482,32.482,0,0,1,17.012,30.3,32.006,32.006,0,0,1,7.164,20.45,32.482,32.482,0,0,1,2.126,6.216,3.283,3.283,0,0,1,5.392,2.641h4.924A3.283,3.283,0,0,1,13.6,5.464a21.075,21.075,0,0,0,1.149,4.612,3.283,3.283,0,0,1-.738,3.463l-2.084,2.084a26.257,26.257,0,0,0,9.847,9.849l2.084-2.082a3.283,3.283,0,0,1,3.463-.738A21.074,21.074,0,0,0,31.931,23.8a3.283,3.283,0,0,1,2.823,3.332Z" transform="translate(-0.911 0.325)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </svg>
    )
}
const Chat = ({ color = "currentcolor" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="38.229" height="33.454" viewBox="0 0 38.229 33.454">
            <path d="M18.142,7C11.017,7,5,10.83,5,15.363a.6.6,0,0,0,1.195,0c0-3.819,5.583-7.168,11.948-7.168a.6.6,0,1,0,0-1.195Z" transform="translate(0.974 -1.026)" fill={color} fillRule="evenodd" />
            <path d="M19.116,2C8.558,2,0,8.419,0,16.337,0,21.268,3.32,25.615,8.373,28.2c0,.032-.01.053-.01.089,0,2.142-1.6,4.445-2.3,5.658h0a1.082,1.082,0,0,0,.994,1.511c.112,0,.309-.03.3-.017,3.734-.612,7.251-4.042,8.068-5.036a25.3,25.3,0,0,0,3.687.274c10.555,0,19.116-6.419,19.116-14.337S29.672,2,19.116,2Zm0,26.284a23.206,23.206,0,0,1-3.34-.247,2.122,2.122,0,0,0-.347-.025,2.391,2.391,0,0,0-1.847.872A16.049,16.049,0,0,1,9.9,31.918a9.354,9.354,0,0,0,.855-3.5c.007-.076.011-.154.011-.22a2.389,2.389,0,0,0-1.3-2.128c-4.428-2.26-7.07-5.9-7.07-9.729,0-6.587,7.5-11.947,16.727-11.947S35.843,9.751,35.843,16.339,28.337,28.284,19.116,28.284Z" transform="translate(0 -2)" fill="#222" fillRule="evenodd" />
        </svg>
    )
}
const Email = ({ color = "currentcolor" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 34.963 28.139">
            <g transform="translate(0.25 0.25)">
                <g>
                    <g>
                        <path d="M29.985,32.139H4.678A4.608,4.608,0,0,1,.1,27.561V9.078A4.608,4.608,0,0,1,4.678,4.5H29.985a4.608,4.608,0,0,1,4.578,4.578v18.4A4.627,4.627,0,0,1,29.985,32.139ZM4.678,6.227a2.9,2.9,0,0,0-2.937,2.85v18.4a2.876,2.876,0,0,0,2.85,2.85H29.9a2.876,2.876,0,0,0,2.85-2.85V9.078a2.876,2.876,0,0,0-2.85-2.85Z" transform="translate(-0.1 -4.5)" fill={color} stroke={color} strokeWidth="0.5" />
                    </g>
                    <g transform="translate(4.871 3.659)">
                        <path d="M18.055,21.831a5.334,5.334,0,0,1-3.887-1.814L5.963,10.171a.858.858,0,1,1,1.3-1.123l8.292,9.932a3.2,3.2,0,0,0,5.01,0l8.206-9.846a.858.858,0,1,1,1.3,1.123L21.857,20.1a4.683,4.683,0,0,1-3.8,1.727Z" transform="translate(-5.738 -8.734)" fill={color} stroke={color} strokeWidth="0.5" />
                    </g>
                    <g transform="translate(23.699 14.714)">
                        <path d="M34.413,30.4a.786.786,0,0,1-.691-.345l-5.959-7.083a.858.858,0,1,1,1.3-1.123l5.96,7.08a.834.834,0,0,1-.087,1.21A.615.615,0,0,1,34.413,30.4Z" transform="translate(-27.538 -21.534)" fill={color} stroke={color} strokeWidth="0.5" />
                    </g>
                    <g transform="translate(2.979 14.781)">
                        <path d="M4.371,30.319a.926.926,0,0,1-.518-.173.839.839,0,0,1-.087-1.209l5.873-7a.858.858,0,1,1,1.292,1.123l-5.87,7A.98.98,0,0,1,4.371,30.319Z" transform="translate(-3.55 -21.608)" fill={color} stroke={color} strokeWidth="0.5" />
                    </g>
                </g>
            </g>
        </svg>
    )
}

const Location = ({ color = "currentcolor" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 29.128 47.829">
            <g id="_3586361_location_map_navigation_pointer_icon" data-name="3586361_location_map_navigation_pointer_icon" transform="translate(-23.142 -4.38)">
                <path d="M41.773,39.012l7.859-12.637a.716.716,0,0,0,.064-.128,14.044,14.044,0,1,0-23.938,0,.811.811,0,0,0,.056.113l7.577,12.681c-5.882.831-9.75,3.25-9.75,6.184,0,3.635,6.178,6.482,14.064,6.482S51.77,48.862,51.77,45.227C51.77,42.28,47.722,39.807,41.773,39.012ZM27.17,25.541a12.471,12.471,0,1,1,21.113,0,.757.757,0,0,0-.065.131l-8.3,13.35c-.125.191-.149.235-.3.485l-2.1,3.372-10.275-17.2A.791.791,0,0,0,27.17,25.541Zm10.536,24.6c-7.361,0-12.491-2.588-12.491-4.91,0-2.107,3.863-4.093,9.06-4.708l2.553,4.273a.786.786,0,0,0,.668.383H37.5a.787.787,0,0,0,.668-.371l2.684-4.315c5.279.572,9.343,2.608,9.343,4.739C50.2,47.549,45.068,50.137,37.706,50.137Z" transform="translate(0)" stroke={color} strokeWidth="1" />
                <path d="M50.943,27.035a5.106,5.106,0,1,0-5.106,5.106A5.112,5.112,0,0,0,50.943,27.035Zm-8.64,0a3.534,3.534,0,1,1,3.534,3.534A3.538,3.538,0,0,1,42.3,27.035Z" transform="translate(-8.131 -8.112)" />
            </g>
        </svg>
    )
}
const Whatsaap = ({ color = "currentcolor" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36.103 36.276">
            <g id="_843786_whatsapp_icon" data-name="843786_whatsapp_icon" transform="translate(-4.112 -3.489)">
                <path d="M34.954,8.761A17.98,17.98,0,0,0,6.662,30.45l-2.55,9.315,9.529-2.5a17.96,17.96,0,0,0,8.59,2.188h.007A17.983,17.983,0,0,0,34.954,8.761ZM22.238,36.417h-.006a14.919,14.919,0,0,1-7.6-2.083l-.546-.324L8.428,35.494l1.509-5.513-.355-.565a14.94,14.94,0,1,1,12.657,7Z" transform="translate(0)" fill={color} fillRule="evenodd" />
                <path d="M33.765,28.811c-.449-.225-2.657-1.311-3.069-1.461s-.711-.225-1.011.225-1.16,1.461-1.422,1.761-.524.337-.973.112a12.267,12.267,0,0,1-3.612-2.229,13.538,13.538,0,0,1-2.5-3.112c-.262-.45-.028-.693.2-.917.2-.2.449-.525.674-.787a3.067,3.067,0,0,0,.449-.749.827.827,0,0,0-.037-.787c-.112-.225-1.011-2.436-1.385-3.335-.365-.876-.735-.757-1.011-.771s-.561-.016-.861-.016a1.65,1.65,0,0,0-1.2.562,5.038,5.038,0,0,0-1.572,3.747A8.736,8.736,0,0,0,18.27,25.7c.225.3,3.167,4.836,7.673,6.782a25.788,25.788,0,0,0,2.561.946,6.156,6.156,0,0,0,2.829.178c.863-.129,2.657-1.086,3.032-2.136a3.754,3.754,0,0,0,.262-2.136C34.514,29.149,34.214,29.036,33.765,28.811Z" transform="translate(-3.332 -3.584)" fill="#222" fillRule="evenodd" />
            </g>
        </svg>
    )
}
const Toggleup = ({ color = "currentcolor" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 9.416 6.122">
            <g transform="translate(1.414 4.708) rotate(-90)">
                <line x2="3.294" y2="3.294" transform="translate(0 0)" fill="none" stroke={color} strokeLinecap="square" strokeWidth="2" />
                <line y1="3.294" x2="3.294" transform="translate(0 3.294)" fill="none" stroke={color} strokeLinecap="square" strokeWidth="2" />
            </g>
        </svg>
    )
}
const Toggledown = ({ color = "currentcolor" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 9.416 6.122">
            <g transform="translate(8.001 1.414) rotate(90)">
                <line x2="3.294" y2="3.294" transform="translate(0 0)" fill="none" stroke={color} strokeLinecap="square" strokeWidth="2" />
                <line y1="3.294" x2="3.294" transform="translate(0 3.294)" fill="none" stroke={color} strokeLinecap="square" strokeWidth="2" />
            </g>
        </svg>
    )
}
const Workingaction = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28">
            <g>
                <g transform="translate(0)">
                    <path d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z" fill="#cccccc" />
                </g>
                <g transform="translate(12.904 10.5)">
                    <line x2="3.294" y2="3.294" transform="translate(0 0)" fill="none" stroke="#fff" strokeLinecap="square" strokeWidth="2" />
                    <line y1="3.294" x2="3.294" transform="translate(0 3.294)" fill="none" stroke="#fff" strokeLinecap="square" strokeWidth="2" />
                </g>
            </g>
        </svg>
    )
}
const LeftArrow = ({ color = "currentcolor" }) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
            <g>
                <g transform="translate(0)">
                    <path d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z" fill={color} />
                </g>
                <g transform="translate(12.904 10.5)">
                    <line x2="3.294" y2="3.294" transform="translate(0 0)" fill="none" stroke="#fff" strokeLinecap="square" strokeWidth="2" />
                    <line y1="3.294" x2="3.294" transform="translate(0 3.294)" fill="none" stroke="#fff" strokeLinecap="square" strokeWidth="2" />
                </g>
            </g>
        </svg>
    )
}
const ValidSuccesArrow = ({ color = "currentcolor" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18.526" height="15" viewBox="0 0 18.526 15">
            <path d="M15.742,49,6.307,58.439,2.781,54.912,0,57.7,6.3,64l.815-.811h0L18.526,51.781Z" transform="translate(0 -49)" fill="#43a700" />
        </svg>
    )
}
const ValidErrorArrow = ({ color = "currentcolor" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18.526" height="15" viewBox="0 0 11 11">
            <path d="M105.154,146.1,109,142.254l-1.654-1.654-3.846,3.846L99.654,140.6,98,142.254l3.846,3.846L98,149.946l1.654,1.654,3.846-3.846,3.846,3.846L109,149.946Z" transform="translate(-98 -140.6)" fill="#e44061" />
        </svg>
    )
}
const CopyUrl = ({ color = "currentcolor" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20.004" height="18" viewBox="0 0 20.004 18">
            <path d="M17.482,10.03A4,4,0,0,1,14,16H10a4,4,0,0,1,0-8h1a1,1,0,0,0,0-2H10a6,6,0,0,0,0,12h4a6,6,0,0,0,5.21-8.98L19.2,9a1,1,0,1,0-1.72,1.03M2.522,7.97A4,4,0,0,1,6,2h4a4,4,0,0,1,0,8H9a1,1,0,0,0,0,2h1A6,6,0,1,0,10,0H6A6,6,0,0,0,.792,8.98L.8,9a1,1,0,1,0,1.72-1.03" transform="translate(0 0)" />
        </svg>
    )
}
const PaymentOrder = ({ color = "currentcolor" }) => {
    return (
        <svg id="Group_760" data-name="Group 760" xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24">
            <defs>
                <clipPath id="clip-path">
                    <rect id="Rectangle_949" data-name="Rectangle 949" width="32" height="24" fill="none" />
                </clipPath>
            </defs>
            <g id="Group_759" data-name="Group 759" clip-path="url(#clip-path)">
                <path id="Path_392" data-name="Path 392" d="M27.871,0H4.129A4.152,4.152,0,0,0,0,4.174V19.826A4.152,4.152,0,0,0,4.129,24H27.871A4.152,4.152,0,0,0,32,19.826V4.174A4.152,4.152,0,0,0,27.871,0" fill="#e664a5" />
                <path id="Path_393" data-name="Path 393" d="M6.141,4.622v14.8a1.276,1.276,0,0,0,1.272,1.272h8.862c6.7,0,9.583-3.732,9.583-8.693s-2.883-8.692-9.583-8.692H7.455A1.38,1.38,0,0,0,6.141,4.622" fill="#fff" />
                <path id="Path_394" data-name="Path 394" d="M12.078,7v10.94h4.749c4.325,0,6.191-2.459,6.191-5.894,0-3.307-1.866-5.852-6.191-5.852H12.884A.78.78,0,0,0,12.078,7" fill="#c06" />
                <path id="Path_395" data-name="Path 395" d="M16.276,19.548H8.6a1.232,1.232,0,0,1-1.23-1.23V5.767A1.231,1.231,0,0,1,8.6,4.537h7.675c7.293,0,8.4,4.707,8.4,7.5,0,4.834-2.968,7.506-8.4,7.506M8.6,4.961a.806.806,0,0,0-.806.806V18.318a.806.806,0,0,0,.806.806h7.675c5.131,0,7.972-2.545,7.972-7.124,0-6.149-5-7.081-7.972-7.081Z" />
                <path id="Path_396" data-name="Path 396" d="M13.774,10.558a1.507,1.507,0,0,1,.467.085,1,1,0,0,1,.381.254l.255.382a2.16,2.16,0,0,1,.085.551,1.592,1.592,0,0,1-.085.509,1.339,1.339,0,0,1-.212.424.927.927,0,0,1-.382.3.992.992,0,0,1-.509.085H12.629V10.516Zm-.042,2.12a.539.539,0,0,0,.254-.042c.085-.043.128-.085.212-.128.043-.084.128-.127.128-.254a.951.951,0,0,0,.042-.382.834.834,0,0,0-.042-.339,1.383,1.383,0,0,0-.128-.254.418.418,0,0,0-.212-.17.831.831,0,0,0-.339-.042h-.424V12.72Z" fill="#fff" />
                <path id="Path_397" data-name="Path 397" d="M17.293,10.558v.467h-1.4v.593h1.272v.424H15.894v.636h1.4v.467H15.3V10.516Z" fill="#fff" />
                <path id="Path_398" data-name="Path 398" d="M19.244,10.559l.975,2.629h-.594l-.212-.594h-.975l-.212.594h-.594l.976-2.629Zm.042,1.611-.339-.975-.339.975Z" fill="#fff" />
                <path id="Path_399" data-name="Path 399" d="M21.152,10.558v2.12h1.272v.467H20.558V10.516a3.039,3.039,0,0,0,.594.042" fill="#fff" />
                <path id="Path_400" data-name="Path 400" d="M9.915,13.06a1.188,1.188,0,1,0-1.187-1.187A1.187,1.187,0,0,0,9.915,13.06" />
                <path id="Path_401" data-name="Path 401" d="M10.848,17.937a1.809,1.809,0,0,1-1.823-1.823V14.672a.933.933,0,1,1,1.865,0Z" />
            </g>
        </svg>
    )
}
const Downarrow = ({ color = "currentcolor" }) => {
     return (
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
  <path d="M6 9l6 6 6-6" />
</svg>

     )
}
const MobileIcon = (color = "currentcolor" ) => {
    return(
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
);
}
export {
    MobileIcon, Downarrow, XIcon, CloseIconX, FilterIcon, CloseIcon1, CloseIcon2, SearchIcon, TelephoneIcon, UserIcon, WishIcon, CartIcon, MenuIcon, ImagePlaceholderIcon, TickIcon,
    Chat, Email, Location, Telephone, Whatsaap, Workingaction, Toggleup, Toggledown, LeftArrow, ValidSuccesArrow, ValidErrorArrow, WishOutlineIcon, WishFullIcon,
    CopyUrl }