export interface OrderItemRequest {
	menuId: number;
	quantity: number;
}

export interface OrderMenuRequest {
	storeId: number;
	items: OrderItemRequest[];
}

export interface OrderMenuResponse {
	isAccepted: boolean;
	totalPrice: number;
}
