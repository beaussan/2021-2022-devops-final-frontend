import { useForm } from 'react-hook-form';
import { useCreateTodo } from './api';

export const NewTodo: React.VFC = () => {
  const mutation = useCreateTodo();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{
    value: string;
  }>();

  if (mutation.isLoading) {
    return <div>Adding todo...</div>;
  }

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await mutation.mutate(data.value);
        reset();
      })}
    >
      {mutation.isError ? (
        <div>An error occurred while saving this todo</div>
      ) : null}
      <div className="flex space-x-4">
        <input
          {...register('value')}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          type="text"
          placeholder="Bill"
        />
        <button
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};
