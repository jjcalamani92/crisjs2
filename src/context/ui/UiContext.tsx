import { createContext } from "react";

interface ContextProps {
	isModalOpen: boolean;
	isMenuOpen: boolean;
	isSearchOpen: boolean;
	isCartOpen: boolean;
	// Methods
	toggleSideModal: () => void;
	toggleSideMenu: () => void;
	toggleSideSearch: () => void;
	toggleSideCart: () => void;
}
export const UiContext = createContext({} as ContextProps);
