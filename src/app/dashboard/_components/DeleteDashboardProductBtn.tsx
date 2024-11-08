import { DeleteIcon } from "@/lib/icons/DeleteIcon";
import { DeleteDashboardProductAction } from "../_lib/DeleteDashboardProductAction";

export function DeleteDashboardProductBtn({ id }: { id: string }) {
  return (
    <form action={() => DeleteDashboardProductAction(id)}>
      <button
        type="submit"
        className="rounded-full bg-red-500 p-2 font-bold text-white hover:bg-red-600"
      >
        <DeleteIcon />
      </button>
    </form>
  );
}
