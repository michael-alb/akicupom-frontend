import { Component, OnInit } from '@angular/core';
import {UsersService} from "./shared/users.service";
import {Cupom} from "./shared/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: Cupom[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(data => this.users = data);
  }

  deleteUser(user){
    if (confirm("Tem certeza que deseja remover o cupom ?")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.usersService.deleteUser(user.id)
        .subscribe(null,
          err => {
            alert("Vocẽ não pode deletar esse cupom!.");
            // Revert the view back to its original state
            this.users.splice(index, 0, user);
          });
    }
  }

}
