// import React from "react";
// import { Menubar } from "primereact/menubar";
// import { InputText } from "primereact/inputtext";
// import { Badge } from "primereact/badge";
// import { Avatar } from "primereact/avatar";
// import logo from "../../assets/logo.jpg"
// export default function Header() {
//     //   const itemRenderer = (item) => (
//     //     <a className="flex align-items-center p-menuitem-link">
//     //       <span className={item.icon} />
//     //       <span className="mx-2">{item.label}</span>
//     //       {item.badge && <Badge className="ml-auto" value={item.badge} />}
//     //       {item.shortcut && (
//     //         <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
//     //           {item.shortcut}
//     //         </span>
//     //       )}
//     //     </a>
//     //   );

//     //   const items = [
//     //     {
//     //       label: "Home",
//     //       icon: "pi pi-home",
//     //     },
//     //     {
//     //       label: "Features",
//     //       icon: "pi pi-star",
//     //     },
//     //     {
//     //       label: "Projects",
//     //       icon: "pi pi-search",
//     //       items: [
//     //         {
//     //           label: "Core",
//     //           icon: "pi pi-bolt",
//     //           shortcut: "⌘+S",
//     //           template: itemRenderer,
//     //         },
//     //         {
//     //           label: "Blocks",
//     //           icon: "pi pi-server",
//     //           shortcut: "⌘+B",
//     //           template: itemRenderer,
//     //         },
//     //         {
//     //           label: "UI Kit",
//     //           icon: "pi pi-pencil",
//     //           shortcut: "⌘+U",
//     //           template: itemRenderer,
//     //         },
//     //         {
//     //           separator: true,
//     //         },
//     //         {
//     //           label: "Templates",
//     //           icon: "pi pi-palette",
//     //           items: [
//     //             {
//     //               label: "Apollo",
//     //               icon: "pi pi-palette",
//     //               badge: 2,
//     //               template: itemRenderer,
//     //             },
//     //             {
//     //               label: "Ultima",
//     //               icon: "pi pi-palette",
//     //               badge: 3,
//     //               template: itemRenderer,
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //     },
//     //     {
//     //       label: "Contact",
//     //       icon: "pi pi-envelope",
//     //       badge: 3,
//     //       template: itemRenderer,
//     //     },
//     //   ];

//     const start = (
//         <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
//             <img
//                 alt="logo"
//                 src={logo}
//                 height="50"
//                 style={{ display: "block" }}
//             />
//             <div className="d-flex flex-column justify-content-center" style={{ lineHeight: "1.2" }}>
//                 <div className="text-black fw-700 fs-24">ClassConnect</div>
//                 <div className="text-black fw-300 fs-18">Edulfech Pvt Ltd</div>
//             </div>
//         </div>
//     );




//     return (
//         <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}>
//             <Menubar start={start} />
//         </header>
//     );
// }
import React from "react";
import logo from "../../assets/logo.jpg"
const Header = () => {
    return (
        <header className="py-3 shadow-sm">
            <div className="px-5 d-flex justify-content-between align-items-center">
                {/* Logo / Brand */}
                <div className="d-flex">
                    <img className="d-block"
                        alt="logo"
                        src={logo}
                        height="50"

                    />
                    <div className="ms-2">
                        <h3 className="fw-bold m-0 ">ClassConnect</h3>
                        <h3 className="fw-500 fs-18 m-0 text-start">Edulfech Pvt Ltd</h3>
                    </div>

                </div>
                {/* Navigation */}
                <nav>
                    <a href="#features" className="me-3 text-dark text-decoration-none">
                        Features
                    </a>
                    <a href="#whychoose" className="me-3 text-dark text-decoration-none">
                        Why Us
                    </a>
                    <a href="#signup" className="btn btn-primary btn-sm">
                        Request Demo
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
