import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useReducer } from "react";
import { UiContext, uiReducer } from "./";

export interface UiState {
	isMenuOpen: boolean;
	isModalOpen: boolean;
	isSearchOpen: boolean;
	isCartOpen: boolean;
}
const UI_INITIAL_STATE: UiState = {
	isMenuOpen: false,
	isModalOpen: false,
	isSearchOpen: false,
	isCartOpen: false,

};

export const UiProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

	const toggleSideModal = () => {
		dispatch({ type: "[UI] - ToggleModal" });
	};
	const toggleSideMenu = () => {
		dispatch({ type: "[UI] - ToggleMenu" });
	};
	const toggleSideSearch = () => {
		dispatch({ type: "[UI] - ToggleSearch" });
	};
	const toggleSideCart = () => {
		dispatch({ type: "[UI] - ToggleCart" });
	};

	return (
		<UiContext.Provider
			value={{
				...state,

				// Methods
				toggleSideModal,
				toggleSideMenu,
				toggleSideSearch,
				toggleSideCart,

			}}
		>
			{children}
		</UiContext.Provider>
	);
};
