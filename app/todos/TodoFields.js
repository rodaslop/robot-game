import TextArea from "@/components/TextArea";
import PrioritySelect from "./PrioritySelect";

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
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-[200px]">
          <Loading />
        </div>
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
    </div>
  );
}
