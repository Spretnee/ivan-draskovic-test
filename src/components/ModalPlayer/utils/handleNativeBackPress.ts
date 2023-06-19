export const handleNativeBackPress = (
  isModalOpen: boolean,
  dismissModal: () => void,
) => {
  if (isModalOpen) {
    dismissModal();
    return true; // Prevent default back button behavior
  }
  return false; // Continue with default back button behavior
};
