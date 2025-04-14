import Toast from "react-native-toast-message";
import { ZodError } from "zod";

export const handleZodError = (error: unknown): never => {
  if (error instanceof ZodError) {
    const firstError = error.errors[0];
    const errorPath = firstError.path.join(".");
    const errorMessage = `${errorPath ? `${errorPath}: ` : ""}${
      firstError.message
    }`;

    Toast.show({
      type: "error",
      text1: "Erro de validação",
      text2: errorMessage,
      position: "bottom",
    });
  } else if (error instanceof Error) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: error.message || "Algo deu errado",
      position: "bottom",
    });
  } else {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Erro inesperado",
      position: "bottom",
    });
  }

  throw error;
};
