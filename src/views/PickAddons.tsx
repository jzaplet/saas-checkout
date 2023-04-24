import { useAtom } from 'jotai';
import { Addon } from '../api/types';
import Header from '../components/section/Header';
import NavButtons from '../components/section/NavButtons';
import Spinner from '../components/icons/Spinner';
import AddonSelect from '../components/forms/AddonSelect';
import { addonsQuery, queryRequest, useApi } from '../hooks/useApi';
import { addonsStore, selectedAddonsStore, stepStore } from '../store/store';

function PickAddons(): JSX.Element {
  const { useQuery } = useApi();

  const [, setStep] = useAtom(stepStore);
  const [addons, setAddons] = useAtom(addonsStore);
  const [selectedAddons, setSelectedAddons] = useAtom(selectedAddonsStore);

  function isSelected(addon: Addon): boolean {
    return selectedAddons.find((a) => a.id === addon.id) !== undefined;
  }

  function toggleAddon(addon: Addon): void {
    if (isSelected(addon)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  }

  useQuery({
    queryKey: ['addons'],
    queryFn: async () => {
      const { addons } = await queryRequest(addonsQuery);
      setAddons(addons);
      return addons;
    },
  });

  return (
    <form onSubmit={() => setStep(4)} className="grid grid-cols-1 place-content-between h-full">
      <Header title="Pick add-ons" description="Add-ons help enhance your gamimg experience." />
      <div className="mt-5 xl:mt-0">
        {addons.length < 1 && (
          <div className="flex justify-center py-5">
            <Spinner />
          </div>
        )}

        <div className="grid xl:grid-cols-1 gap-4">
          {addons?.map((addon) => (
            <AddonSelect
              key={addon.id}
              addon={addon}
              isSelected={isSelected(addon)}
              onClick={() => toggleAddon(addon)}
            />
          ))}
        </div>
      </div>
      <NavButtons btnText="Next step" disabled={addons.length < 1} />
    </form>
  );
}

export default PickAddons;
