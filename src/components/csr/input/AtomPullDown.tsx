import { atoms } from "@/utils/atoms";

const AtomPullDown = () => {
  return (
    <div>
      <select name='atomName' id='atomName' className='text-lg p-2 m-2'>
        {Object.keys(atoms).map((atom, index) => (
          <option
            key={index}
            value={atom}
            className='text-sm font-serif italic'>
            {index + 1}. {atom}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AtomPullDown;
