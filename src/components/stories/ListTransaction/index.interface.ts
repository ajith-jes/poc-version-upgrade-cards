export type ListTransactionProps = {
    headers: {
        label: string;
        key: string;
    }[]
    data:any
    caseCreateDataSelected?:string
    onCaseCreateDataSelected?: (...val: any) => void;
}

export interface Root {
    gid: string
    auth_transaction_ref_id: string
    transaction_group: TransactionGroup[]
  }
  
  export interface TransactionGroup {
    transaction_currency_code?: string
    original_transaction_ref_id: any
    enabled: boolean
    bst_transaction_id: string
    transaction_id: string
    transaction_type: string
    transaction_amount: number
    card_type: string
    primary_account_number: string
    local_transaction_date_time: string
    rrn: string
  }