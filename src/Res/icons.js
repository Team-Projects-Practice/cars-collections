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
const UserIcon = ({ color = "currentcolor" }) => {
    return (
     
        <svg>
        <path xmlns="http://www.w3.org/2000/svg" d="M7 8.45C4.73333 8.45 3 8.96667 1.8 10C0.6 11.0333 0 12.5167 0 14.45C0
        14.6167 0.0583333 14.75 0.175 14.85C0.291667 14.95 0.416667 15 0.55 15H13.45C13.5833 15 13.7083 14.95 13.825 14.85C13.9417
         14.75 14 14.6167 14 14.45C14 12.5167 13.4 11.0333 12.2 10C11 8.96667 9.26667 8.45 7 8.45ZM1.15 13.9C1.35 11 3.3 9.55 7 9.55C10.7
          9.55 12.65 11 12.85 13.9H1.15ZM7 0C6.33333 0 5.71667 0.158333 5.15 0.474999C4.58333 0.791666 4.14167 1.23333 3.825 1.8C3.50833
         2.36667 3.35 3 3.35 3.7C3.35 4.4 3.51667 5.05833 3.85 5.675C4.183336.29167 4.625 6.775 5.175 7.125C5.725 7.475 
         6.33333 7.65 7 7.65C7.66667 7.65 8.275 7.475 8.825 7.125C9.375 6.775 9.81667 6.29167 10.15 
         5.675C10.4833 5.05833 10.65 4.4 10.65 3.7C10.65 3 10.4917 2.36667 10.175 1.8C9.85833 1.23333
          9.41667 0.791666 8.85 0.474999C8.28333 0.158333 7.66667 0 7 0ZM7 6.55C6.3 6.55 5.7 6.275 5.2 5.725C4.7 
          5.175 4.45 4.50833 4.45 3.725C4.45 2.94167 4.69167 2.30833 5.175 1.825C5.65833 1.34167 6.26667 1.1 7 
          1.1C7.73333 1.1 8.34167 1.35 8.825 1.85C9.30833 2.35 9.55 2.98333 9.55 3.75C9.55 4.51667 9.3 5.175 8.8 
          5.725C8.3 6.275 7.7 6.55 7 6.55Z" fill="#050B20"/>
    </svg>)

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

const Downarrow = ({ color = "currentcolor" }) => {
     return (
 <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
  <path d="M6 9l6 6 6-6" />
 </svg> 
)
}
const MobileIcon = (color = "currentcolor" ) => {
    return(
 
 <svg>
<path xmlns="http://www.w3.org/2000/svg" d="M9.33333 0.875H2.66667C1.4025 0.875 0.375 1.9025 0.375
 3.16667V14.8333C0.375 16.0975 1.4025 17.125 2.66667 17.125H9.33333C10.5975 17.125 11.625 16.0975 11.625 
 14.8333V3.16667C11.625 1.9025 10.5975 0.875 9.33333 0.875ZM10.375 14.8333C10.375 15.4075 9.9075 15.875
  9.33333 15.875H2.66667C2.0925 15.875 1.625 15.4075 1.625 14.8333V3.16667C1.625 2.5925 2.0925 2.125 2.66667
   2.125H9.33333C9.9075 2.125 10.375 2.5925 10.375 3.16667V14.8333ZM7.45833 4C7.45833 4.345 7.17833 4.625 6.83333
    4.625H5.16667C4.82167 4.625 4.54167 4.345 4.54167 4C4.54167 3.655 4.82167 3.375 5.16667 
3.375H6.83333C7.17833 3.375 7.45833 3.655 7.45833 4Z" fill="#050B20"/>
</svg> 
);
}
export {
    MobileIcon, Downarrow, XIcon, UserIcon,MenuIcon, 
     }