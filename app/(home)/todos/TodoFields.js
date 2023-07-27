import TextArea from "@/components/TextArea";
import PrioritySelect from "./PrioritySelect";
import Box from "@/components/Box";
import Loading from "@/components/Loading";

export default function TodoFields({
  loading = false,
  control,
  register,
  errors,
}) {
  // const handleChange = (e) => {
  //   const [file] = e.target.files;
  //   const url = URL.createObjectURL(file);
  //   console.log("url...", url);
  // };

  return (
    <Box>
      {loading ? (
        <Box className="flex items-center justify-center min-h-[200px]">
          <Loading />
        </Box>
      ) : (
        <>
          <TextArea
            id="description"
            label="Description"
            {...register("description", {
              required: true,
            })}
            invalid={errors?.description}
            className="mb-3"
          />
          <PrioritySelect label="Priority" control={control} />
          {/* <input type="file" onChange={handleChange} /> */}
        </>
      )}
    </Box>
  );
}
