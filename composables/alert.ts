export const useAlertState = () => {
  const alertState = useState("alertState", () => false);
  return { alertState };
};
