// User Registration payload - POST {{baseUrl}}/register
interface RegistrationPayload {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
}

// User Login payload - POST {{baseUrl}}/login
interface LoginPayload {
  email: string;
  password: string;
}

// Create Board payload - POST {{baseUrl}}/boards
interface CreateBoardPayload {
  _id: string;
  name: string;
  dateCreated: string;
  createdBy: string;
  backgroundImage: string;
}

// Update Board payload - PATCH {{baseUrl}}/boards/{{board_id}}
interface CreateBoardPayload {
  _id: string;
  name: string;
  dateCreated: string;
  createdBy: string;
  backgroundImage: string;
}

// Create Column payload - POST {{baseUrl}}/boards/{{board_id}}/columns
interface CreateCardPayload {
  id: string;
  boardId: string;
  columnName: string;
  dateCreated: string;
  userId: string;
  sequence: number;
}

// Update Column payload - PATCH {{baseUrl}}/boards/{{board_id}}/columns/{{column_id}}
interface UpdateColumnPayload {
  _id: string;
  boardName: string;
  columnName: string;
}

// Create Card payload - POST {{baseUrl}}/boards/{{board_id}}/columns/{{column_id}}/cards
interface CreateCardPayload {
  id: string;
  columnId: string;
  boardId: string;
  title: string;
  type: string;
  description: string;
  dateCreated: string;
  userId: string;
  assignedTo: string;
  sequence: number;
}

// Update Card payload - PATCH{{baseUrl}}/boards/{{board_id}}/columns/{{column_id}}
interface UpdateCardData {
  _id: string;
  title: string;
  description: string;
  columnId: string;
  assignedTo: string;
}

// Invite User to Board payload - POST {{baseUrl}}/boards/mail
interface InviteUserPayload {
  email: string;
  boardId: string;
}
