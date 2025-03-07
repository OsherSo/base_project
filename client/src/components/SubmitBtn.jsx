import { useNavigation } from "react-router-dom";

const SubmitBtn = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting" : "Submit"}
    </button>
  );
};

export default SubmitBtn;
