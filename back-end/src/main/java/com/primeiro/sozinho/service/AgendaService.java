package com.primeiro.sozinho.service;

import com.primeiro.sozinho.model.Contato;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AgendaService {

    private static final List<Contato> listaContatos = new ArrayList<>();

    static {
        Contato contato1 = new Contato("giovane", "(77) 9 9952 - 5200");
        Contato contato2 = new Contato("ana clara", "(62) 9 9952- 5200");

        listaContatos.add(contato1);
        listaContatos.add(contato2);

    }

    public List<Contato> findAll() {
        return new ArrayList<>(listaContatos);
    }

    public Contato findByNome(String nome) {
        Contato contato = new Contato();
        Set<String> listaDeNomes = new LinkedHashSet<>();
        String index = null;
        for (Contato entry: listaContatos ) {
            listaDeNomes.add(entry.getNome().toLowerCase());
            System.out.println(listaDeNomes);
        }
        for (String entry: listaDeNomes) {
            if(entry.contains(nome.toLowerCase(Locale.ROOT))) {
                index = entry;
            }

        }
        for (Contato entry: listaContatos) {
            if (entry.getNome().equals(index)) {
                contato = entry;
            }
        }

        return contato;
    }

    public void cadastrarContato(Contato contato){
        Contato contatoAdd = contato;
        contatoAdd.setNome(contato.getNome().toLowerCase());
        listaContatos.add(contatoAdd);
    }

    public String delete(String nome) {
        Contato contatoDelete = null;
        for (Contato entry: listaContatos) {
            if(entry.getNome().equals(nome)){
                contatoDelete = entry;
            }
        }
        if (contatoDelete != null) {
            listaContatos.remove(contatoDelete);
            return "Deletado";
        } else {
            return "não encotrado";
        }

    }

}
