interface PropDef {
  name: string;
  type: string;
  default?: string;
  description?: string;
}

interface PropsTableProps {
  data: PropDef[];
}

export function PropsTable({ data }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-(--nova-border-default)">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-(--nova-border-default) bg-(--nova-bg-secondary)">
            <th className="px-4 py-3 text-left font-medium text-(--nova-text-secondary)">
              Prop
            </th>
            <th className="px-4 py-3 text-left font-medium text-(--nova-text-secondary)">
              Type
            </th>
            <th className="px-4 py-3 text-left font-medium text-(--nova-text-secondary)">
              Default
            </th>
            {data.some((p) => p.description) && (
              <th className="px-4 py-3 text-left font-medium text-(--nova-text-secondary)">
                Description
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((prop, i) => (
            <tr
              key={prop.name}
              className={
                i < data.length - 1
                  ? 'border-b border-(--nova-border-default)'
                  : ''
              }
            >
              <td className="px-4 py-3">
                <code className="rounded bg-(--nova-bg-tertiary) px-1.5 py-0.5 text-xs font-medium text-(--nova-color-primary)">
                  {prop.name}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="text-xs text-(--nova-text-secondary)">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3">
                {prop.default ? (
                  <code className="text-xs text-(--nova-text-tertiary)">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-(--nova-text-tertiary)">-</span>
                )}
              </td>
              {data.some((p) => p.description) && (
                <td className="px-4 py-3 text-(--nova-text-secondary)">
                  {prop.description || '-'}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
