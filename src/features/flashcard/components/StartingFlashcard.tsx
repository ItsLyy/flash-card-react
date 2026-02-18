const StartingFlashcard = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl">{name}</h1>
      <p className="text-violet-50">{description}</p>
    </div>
  );
};

export default StartingFlashcard;
