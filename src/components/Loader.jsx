import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="font-medium text-xl text-center">
      {progress}% Carregado
    </Html>
  );
};

export default Loader;
