import { Material } from "@/utils/types";

const MaterialList = ({ materials }: { materials: Material[] }) => {
  return materials.map(({ atomName, valence }, index) => (
    <li key={index} className='font-medium text-2xl list-none'>
      <h2 className='text-2xl'>
        {atomName}
        <sub className='text-xl'>{valence === 1 ? "" : valence}</sub>
      </h2>
    </li>
  ));
};

export default MaterialList;
