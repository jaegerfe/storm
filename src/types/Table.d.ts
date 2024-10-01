export interface TableHeaderItem {
    title: string;
    field: string;
}

export interface TableContentItem {
    value: string | number;
}

export interface TableRowItem {
    rows: TableContentItem[];
}

export interface SortBy {
    field: string;
    ascending: boolean;
}
