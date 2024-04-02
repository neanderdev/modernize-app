import './styles.css';

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}

export function PaginationItem({
    number,
    isCurrent = false,
    onPageChange
}: PaginationItemProps) {
    if (isCurrent) {
        return (
            <button
                type='button'
                className='page-number active'
            >
                {number}
            </button>
        );
    }

    return (
        <button
            type='button'
            className='page-number'
            onClick={() => onPageChange(number)}
        >
            {number}
        </button>
    );
}
