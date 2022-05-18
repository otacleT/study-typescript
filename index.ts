type User = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};

type OmitUser = Omit<User, "age">;

const user: OmitUser = {
  name: "たいせい",
  country: "JP",
};
